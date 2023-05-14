# UDP Sockets Sp4m

## ⚠️ Disclaimer

This tool is for educational purposes only. I am not responsible for any damage you cause. Use at your own risk.

<h2 align="center" > Demo Video 📷 <h2>

<div align="ceneter" >
<span style="width: 300px">

[![My video](https://img.youtube.com/vi/ckRlyBuZ1Xs/0.jpg)](https://www.youtube.com/watch?v=ckRlyBuZ1Xs)

</span>
</div>

## 📌 Features

- [x] Multi-threaded
- [ ] Proxy support


## 🔧 Instalation Linux (VPS)  🐧

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

## 🔧 Instalation Termux  📱


```bash

apt update
apt -y upgrade 

pkg install git nodejs -y
git clone https://github.com/LearXD/udp-sockets
cd udp-sockets
npm install

```


## 🔎 Usage

```bash
node . <address> <port> [<threads>] [<time>]
```