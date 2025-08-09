module.exports = {
  apps: [
    {
      name: 'front-craft',
      cwd: '/var/www/front-craft',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '400M',
      error_file: '/var/www/front-craft/logs/pm2/error.log',
      out_file: '/var/www/front-craft/logs/pm2/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
}
