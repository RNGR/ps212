
## Digital Ocean Droplet
https://cloud.digitalocean.com/projects/19a33d58-3b0a-4bce-b902-85b590740811/resources?i=0ab72e
ssh root@104.248.239.143 -i ~/.ssh/ps212_id_rsa
tar -czvf ps212_assets.tar.gz /var/www/api/public/uploads/_
scp -i ~/.ssh/ps212_id_rsa root@104.248.239.143:/var/www/api/public/uploads/ps212_assets.tar.gz .

Directus running on the droplet:
- migrate the database and project -- keep backup of database and assets on support drive
- then shutdown this droplet

    'database' => [
        'type' => 'mysql',
        'host' => 'localhost',
        'port' => 3306,
        'name' => 'ps212',
        'username' => 'root',
        'password' => 'Alligat0r$',
        'engine' => 'InnoDB',
        'charset' => 'utf8mb4'
    ],

Website running on Netlify
https://www.ps212.com/

https://api.ps212.rngr.org//server/?access_token=demo

usr: support@directus.io
pwd: d1r3ctu5

## v7 Directus User
user: support@directus.io
pass: d1r3ctu5Support!

//https://api.ps212.rngr.org//_/users?access_token=demo
//https://api.ps212.rngr.org//_/settings?access_token=demo
//https://api.ps212.rngr.org//admin/#/login?project=_ ****DOESN'T WORK

https://api.ps212.rngr.org//_/collections?access_token=demo

insert into directus_users (status, email, password)
values ('active', 'support@directus.io', '$2y$10$wEO9KyJaAqOF1LpnHeHSgOkGcEvCcOtWiHF1ivButPQV0Wg2myrGe');
insert into directus_user_roles (user, role)
values (9, 1);


select added_on, email from contacts where added_on > '2023-01-02 18:00:00';
