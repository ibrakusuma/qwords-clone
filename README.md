# Qwords Clone
Project built with Laravel x Tailwind CSS

# Requirements
- Laravel installer
- Composer
- Npm Installer

# Installation
````
# Clone the repository from GitHub and open the directory:
git clone https://github.com/ibrakusuma/qwords-clone.git

# cd into your project directory
cd qwords-clone

# install composer and npm packages
composer install
npm install

# Start prepare the environment:
cp .env.example .env // setup database credentials
php artisan key:generate
php artisan migrate
php artisan storage:link

# Run your server
php artisan serve
npm run dev
````
