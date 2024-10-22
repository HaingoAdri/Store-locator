create database store_locator;

\c store_locator

create table store(
    id varchar(20) primary key,
    nom varchar(50)
);

create table location(
    id varchar(20) primary key,
    nom varchar(100),
    brand varchar(100),
    langue varchar(20),
    numero varchar(50),
    autre_num varchar(50),
    site_web varchar(50),
    email varchar(50),
    status varchar(50),
    slug varchar(50),
    rue varchar(100),
    code_postale varchar(50),
    locality varchar(100),
    longitude double precision,
    latitude double precision,
    description varchar(1500),
    store_locator varchar(20) references store(id)
);

create table horaires(
    id serial primary key,
    store_locator varchar(20) references store(id),
    monday varchar(20),
    tuesday varchar(20),
    wednesday varchar(20),
    thursday varchar(20),
    friday varchar(20),
    saturday varchar(20),
    sunday varchar(20)
);

create table special_hour(
    id serial primary key,
    store_locator varchar(20) references store(id),
    event varchar(300),
    houres varchar(20)
);

create table media(
    id serial primary key,
    location varchar(20) references location(id),
    type varchar(50),
    url varchar(300)
);

create table image(
    id serial primary key,
    location varchar(20) references location(id),
    url varchar(300)
);

create table langue(
    id serial primary key,
    type varchar(50),
    code varchar(20)
);

create table traduction(
    id serial primary key,
    type varchar(500),
    langue int references langue(id),
    location varchar(20) references location(id),
    resuts varchar(1500)
);

create table services(
    id serial primary key,
    nom varchar(500),
    logo varchar(500),
    location varchar(20) references location(id)
);

create table groupe_services(
    id serial primary key,
    nom varchar(500),
    services int references services(id)
);

create table stock_location(
    id serial primary key,
    location varchar(20) references location(id),
    produit varchar(500),
    description varchar(300),
    quantite int,
    prix double precision,
    remise double precision,
    date date
);
