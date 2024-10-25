create table products
(
    id          serial
        primary key,
    name        varchar(100)        not null,
    description text,
    price       numeric(10, 2)      not null,
    quantity    integer   default 0 not null,
    "createdAt" timestamp default CURRENT_TIMESTAMP
);

alter table products
    owner to postgres;

create table invoice
(
    id        serial
        primary key,
    userid    integer        not null,
    total     numeric(10, 2) not null,
    createdat timestamp default CURRENT_TIMESTAMP
);

alter table invoice
    owner to postgres;

create table invoiceitems
(
    id        serial
        primary key,
    invoiceid integer
        references invoice,
    productid integer
        references products,
    quantity  integer        not null,
    price     numeric(10, 2) not null,
    subtotal  numeric(10, 2) not null
);

alter table invoiceitems
    owner to postgres;

create table carts
(
    id          serial
        primary key,
    "userId"    integer not null,
    quantity    integer not null,
    "productId" integer
                        references products
                            on update cascade on delete set null
);

alter table carts
    owner to postgres;

