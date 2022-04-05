# CyberDev

Development test

---

## Table of Contents

- [CyberDev](#cyberdev)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
    - [Node](#node)
    - [Yarn](#yarn)
  - [Install](#install)
    - [Run Algorithms](#run-algorithms)
      - [Random Values](#random-values)
      - [Prime numbers](#prime-numbers)
      - [ATM Emulator](#atm-emulator)
      - [Coincidences](#coincidences)
    - [Run MobileApp](#run-mobileapp)
      - [Run Movie App in your local environment](#run-movie-app-in-your-local-environment)
      - [Run APK in Android Device](#run-apk-in-android-device)
        - [App Screens](#app-screens)

## Requirements

For development, you will only need NodeJS and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official NodeJS website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official NodeJS website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.13.1

    $ npm --version
    8.1.2

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### Yarn

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

Clone the repository, open terminal in root and do the following on terminal

    $ git clone https://github.com/GaboMendez/CyberDev
    $ cd CyberDev

### Run Algorithms

     $ cd Algorithms

#### Random Values

     $ node RandomValues.js

#### Prime numbers

     $ node PrimeNumber.js

#### ATM Emulator

     $ node CashMachine.js

#### Coincidences

     $ node Coincidences.js

### Run MobileApp

If you are in `./Algorithms` you need to do:

     $ cd ..
     $ cd MobileApp

Otherwise you need to do:

     $ cd MobileApp

#### Run Movie App in your local environment

     $ yarn install
     $ yarn android

#### Run APK in Android Device

If you are in the project root directory you only need to do:

     $ cd ReleaseAndroid

Take the `.apk` file to android device for installing it, and that's it you have the `MovieApp` in your phone.

##### App Screens

<p aling="center">
<img src="https://i.ibb.co/4TWqbx7/Home.png" width="30%" />
<img src="https://i.ibb.co/dgQbhSV/Detail01.png" width="30%" />
<img src="https://i.ibb.co/MC1bmTG/Detail02.png" width="30%" /> 
</p>
<p aling="center">
<img src="https://i.ibb.co/z43ZxrW/Favorites.png" width="30%" /> 
</p>
