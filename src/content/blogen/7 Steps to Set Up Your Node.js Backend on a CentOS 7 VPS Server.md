---
title: "7 Steps to Set Up Your Node.js Backend on a CentOS 7 VPS Server"
username: "kader1303"
pubDate: "Mar 28 2023"
description: "Learn how to configure a CentOS 7 VPS server to run a Node.js backend application using PM2, a process manager that allows efficient management of applications on a server. This tutorial details the steps to install Node.js, PM2, and configure the application for use."
heroImage: "https://firebasestorage.googleapis.com/v0/b/a-manyar.appspot.com/o/pm2banner.png?alt=media&token=0bf8d179-9d43-44b3-a6a1-6cddc7f921e7"
categories: ["tutorials"]
---

PM2 is a Node.js process manager that makes it easy to manage applications on a server. In this article, I will describe how to set up a VPS with CentOS 7 to run your backend and forget about any problems.

## Step 1: Set up a VPS

Log in to your server using SSH with a user with sudo privileges and make sure your operating system is up-to-date with the following command:

```
sudo yum update
```

## Step 2: Install Node.js

Before installing Node.js, you need to add the repository to your system. To do this, run the following commands:

```
sudo curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -
```

Then, install Node.js with the following command:

```
sudo yum install nodejs
```

## Step 3: Install PM2

To install PM2, run the following command:

```
sudo npm install -g pm2
```

## Step 4: Configure the application

Next, you need to configure your Node.js application so it can be managed by PM2. First, navigate to your application directory and make sure your application can be run with the following command:

```
node app.js #remplaza app.js por el nombre de entrada de tu aplicación
```

If your application runs correctly, you can stop it with CTRL+C and proceed with the configuration.

Then, start and save this process to be registered with PM2 using the following commands:


```
pm2 start app.js
pm2 save
```

## Step 5: Configure PM2 to run on system startup

To ensure that PM2 starts automatically when the server starts, run the following command:

```
pm2 startup systemd
```

This will create a script that you need to copy and paste into the console to run.

## Step 6: Manage the application with PM2

Now that your application is configured and running with PM2, you can manage it using the following commands:

```
m2 list              # lista todas las aplicaciones que se ejecutan en PM2
pm2 logs              # muestra los registros de la aplicación
pm2 stop <app-name>   # detiene la aplicación especificada
pm2 restart <app-name># reinicia la aplicación especificada
pm2 delete <app-name> # elimina la aplicación especificada de PM2
```

## Step 7: Configure PM2 for application monitoring

To monitor the application, PM2 can generate a report of your application's CPU usage, memory usage, disk usage, and more. To enable this feature, you need to sign up for a free account at https://pm2.io, which you can do by linking your GitHub account if you wish.

Then, it will ask you to create a bucket with the name you want, and immediately after creating the bucket, it will give you the code that you must run in your SSH server console to link it to your PM2 account, and voilà! You will have all the logs, bugs, and performance details in a modern web management panel where you can also stop, restart or delete your processes.

## Bonus Tip:

If you want a good, nice, and cheap VPS server, I highly recommend the service of the guys at [ethernetservers.com](https://www.ethernetservers.com/clients/aff.php?aff=1999) with private servers from $1.25 USD per month, and of course, you can pay with crypto.

<img src="https://firebasestorage.googleapis.com/v0/b/a-manyar.appspot.com/o/ethernet.png?alt=media&token=7bd223dd-7889-478a-af83-da5c8635211c" alt="Ofertas especiales de ethernet servers">