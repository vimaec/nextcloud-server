<?php
$CONFIG = array (
  /* This version number must correspond to your base nextcloud release version.*/
  'version' => '23.0.0.1',  
  'instanceid' => 'INSTANCE_ID',
  'passwordsalt' => 'PASSWORD_SALT',
  'secret' => 'SECRET',
  'trusted_domains' =>
  array (
    0 => '*',
  ),
  'tempdirectory' => '/media/extdisk',
  'overwriteprotocol' => 'https',
  'datadirectory' => '/mnt/nxdata/data',
  'dbtype' => 'mysql',  
  'dbname' => 'nextcloud_db',
  'dbhost' => 'DB_HOST',
  'dbport' => '',
  'dbtableprefix' => 'oc_',
  'mysql.utf8mb4' => true,
  'dbdriveroptions' => [       
      \PDO::MYSQL_ATTR_SSL_CA => '/etc/ssl/certs/Baltimore_CyberTrust_Root.pem',  
  ],
  'dbuser' => 'DB_USER',
  'dbpassword' => 'DB_PASSWORD',
  'memcache.distributed' => '\OC\Memcache\Redis',
  'memcache.locking' => '\OC\Memcache\Redis',
  'redis' => [
     'host' => 'REDIS_HOST',
     'port' => 6380,
     'password' => 'REDIS_PASSWORD'
  ],
  'installed' => true,
  'theme' => '',
  'loglevel' => 2,
  'maintenance' => false,
  'updatechecker' => false,
  'config_is_read_only' => true,
  'appstoreenabled' => false,
  'log_type' => 'syslog',

);
