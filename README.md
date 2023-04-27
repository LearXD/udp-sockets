<div align="center">
    <h1> <b>UDP Sockets Sp4m</b> </h1>
    <p>*** For educational purposes ***</p>
</div>


> **Warning**

> Buy server protection at: LearXD #1044

<h2 align="center"> Demo Video 📷 <h2>

<div>
[![My video](https://img.youtube.com/vi/ckRlyBuZ1Xs/0.jpg)](https://www.youtube.com/watch?v=ckRlyBuZ1Xs)

<div align="center">
    <h2> <b>🔧 Instalation Linux  🐧</b> </h1>
</div>

```bash

sudo apt update
sudo apt upgrade -y
sudo apt install curl git -y

git clone https://github.com/LearXD/udp-sockets
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs

cd udp-sockets
npm install

```

<div align="center">
    <h2> <b>🔧 Instalation Termux  📱</b> </h1>
</div>

```bash

apt update
apt -y upgrade 

pkg install git nodejs -y
git clone https://github.com/LearXD/udp-sockets
cd udp-sockets
npm install

```

<div align="center">
    <h2> <b>🔎 Usage</b> </h1>
</div>

```bash
node . <address> <port> [<threads>] [<time>]
```