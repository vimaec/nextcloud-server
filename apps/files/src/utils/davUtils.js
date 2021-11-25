/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import { generateRemoteUrl } from '@nextcloud/router'
import { getCurrentUser } from '@nextcloud/auth'

export const getRootPath = function() {
	if (getCurrentUser()) {
		return generateRemoteUrl(`dav/files/${getCurrentUser().uid}`)
	} else {
		return generateRemoteUrl('webdav').replace('/remote.php', '/public.php')
	}
}

export const isPublic = function() {
	return !getCurrentUser()
}

export const getToken = function() {
	return document.getElementById('sharingToken') && document.getElementById('sharingToken').value
}

/**
 * Return the current directory, fallback to root
 * @returns {string}
 */
export const getCurrentDirectory = function() {
	const currentDirInfo = OCA?.Files?.App?.currentFileList?.dirInfo
		|| { path: '/', name: '' }

	// Make sure we don't have double slashes
	return `${currentDirInfo.path}/${currentDirInfo.name}`.replace(/\/\//gi, '/')
}
const parseXml = (xml) => {
	let dom = null
	try {
		dom = (new DOMParser()).parseFromString(xml, 'text/xml')
	} catch (e) {
		console.error('Failed to parse xml document', e)
	}
	return dom
}

const xmlToJson = (xml, documentElement) => {
	let obj = {}

	if (xml === null || xml === undefined) {
		return obj
	}

	if (xml.nodeType === 1) {
		obj['@prefix'] = xml.prefix
		obj['@namespaceURI'] = xml.prefix ? xml.lookupNamespaceURI(xml.prefix) : undefined

		if (xml.attributes.length > 0) {
			obj['@attributes'] = {}
			for (let j = 0; j < xml.attributes.length; j++) {
				const attribute = xml.attributes.item(j)
				obj['@attributes'][attribute.nodeName] = attribute.nodeValue
			}
		}
	} else if (xml.nodeType === 3) {
		obj = xml.nodeValue
	}

	if (xml.hasChildNodes()) {
		for (let i = 0; i < xml.childNodes.length; i++) {
			const item = xml.childNodes.item(i)
			const nodeName = item.nodeName
			if (typeof (obj[nodeName]) === 'undefined') {
				obj[nodeName] = xmlToJson(item, documentElement)
			} else {
				if (typeof obj[nodeName].push === 'undefined') {
					const old = obj[nodeName]
					obj[nodeName] = []
					obj[nodeName].push(old)
				}
				obj[nodeName].push(xmlToJson(item, documentElement))
			}
		}
	}
	return obj
}

export const xmlToTagList = (xmlString) => {
	const xml = parseXml(xmlString)
	const json = xmlToJson(xml, xml)

	if (json['d:multistatus']) {
		const list = json['d:multistatus']['d:response']

		let listElement
		if (Array.isArray(list)) {
			listElement = list[0]['d:propstat']
		} else {
			listElement = list['d:propstat']
		}

		listElement = Array.isArray(listElement) ? listElement : [listElement]
		return [...listElement]
			.filter(propstat => propstat['d:status']['#text'] === 'HTTP/1.1 200 OK')
			.map(tag => tag['d:prop'])
			.flatMap(tag => {
				return Object.entries(tag)
					.map(a => a)
					.filter(([nodeType, content]) => {
						return content['@prefix'] !== undefined
					})
			})
			.map(([propertyname, value]) => {
				const namespaceURI = value['@namespaceURI']
				const propertyvalue = value['#text']

				return {
					propertyname,
					propertyvalue,
					namespaceURI,
				}
			})
	}

	return []
}

export const isEmptyObject = (fileInfo) => {
	if (fileInfo === null || fileInfo === undefined) {
		return true
	}
	return fileInfo && Object.keys(fileInfo).length === 0 && fileInfo.constructor === Object
}

