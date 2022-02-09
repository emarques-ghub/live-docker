> criando MySQL db para conectar
docker exec -it my-sql /bin/bash
mysql -u root -p
mysql> SHOW DATABASES;
mysql> create database Students;
mysql> use Students;
mysql> CREATE TABLE Information (firstname VARCHAR(20), lastname VARCHAR(20),
       grade VARCHAR(20), sex CHAR(1), birth DATE);
mysql> describe Information;
mysql> INSERT INTO Information VALUES ('Eduardo','Marques','Undergrad','M','1969-05-02');
        INSERT INTO Information VALUES ('Marina','Marques','Undergrad','F','2006-06-25');
        INSERT INTO Information VALUES ('Felipe','Marques','Undergrad','M','2008-07-12');
        INSERT INTO Information VALUES ('Carla','Marques','Undergrad','F','1973-11-14');
        INSERT INTO Information VALUES ('Gustavo','Marques','Undergrad','M','1970-07-27');
mysql> select * from Information;