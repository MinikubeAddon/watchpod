# Watchpod &middot; Minikube file watcher and build automator 

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

<p align="center">
  <a href="https://github.com/MinikubeAddon/watchpod">
    <img height="250" width="250" src="https://github.com/MinikubeAddon/watchpod/blob/master/watchpodLogo.png">
  </a>
</p>

> Watchpod is a minikube addon that detects file changes, then automates the build and deployment of local k8 nodes 

[Minikube]: https://github.com/kubernetes/minikube
[Minikube clone]: https://github.com/MinikubeAddon/minikube
[build guide]: https://github.com/kubernetes/minikube/blob/master/docs/contributors/build_guide.md

## Quick Overview

```
minikube start
minikube mount /{place directory for files to watch}:mount-9p  #(run this line in new terminal tab. Keep open)
kubectl apply -f https://raw.githubusercontent.com/MinikubeAddon/watchpod/master/watchpod.yaml
minikube service watchpod
```

This will deploy and open your app on localhost

## Demo
![Alt Text](https://github.com/MinikubeAddon/watchpod/blob/master/watchpod.gif)


## Stepwise Guide
1. Run `minikube start` in a terminal tab
2. Open a seperate terminal window. Mount on working directory where files to be watched live by running:  
`minikube mount /"path to files":/mount-9p`  
`ex: minikube mount /Users/Github/frasaja/watchme:/mount-9p`    
 **leave the tab used to mount open. Move back to the tab where minikube is running**
3. Run `kubectl apply -f https://raw.githubusercontent.com/MinikubeAddon/watchpod/master/watchpod.yaml`
4. In same non-mount terminal tab, run `minikube service watchpod`
5. The addon will now rebuild your application when a file in the mounted directory is changed


## Applying the manifest 

```
kubectl apply -f https://raw.githubusercontent.com/MinikubeAddon/watchpod/master/watchpod.yaml
```

## Install on Minikube

Watchpod is currently not available on [Minikube]. We are in the process of tightening up the code for submission.
You can fork our [Minikube clone], then follow the instructions on [build guide] to run the addon from Minikube locally:

```
 ./out/minikube addons enable watchpod
```


<h2>Core Team</h2> 
 <table> 
  <tbody> 
   <tr> 
    <td align="center" valign="top"> 
     <img width="150" height="150" src="https://github.com/ASimpleHuman.png?s=150"> 
     <br>
     <a href="https://github.com/ASimpleHuman"> Frank Hu </a>
     <br>
     <!-- <a href="https://www.linkedin.com/in/frankjunhu/"> LinkedIn </a> --> 
    </td>
    <td align="center" valign="top"> 
     <img width="150" height="150" src="https://github.com/sarahheacock.png?s=150"> 
     <br>
     <a href="https://github.com/sarahheacock"> Sarah Heacock </a>
     <br>
     <!-- <a href="https://www.linkedin.com/in/sarah-heacock-ab8677126"/> LinkedIn </a> -->  
    </td>
    <td align="center" valign="top"> 
     <img width="150" height="150" src="https://github.com/jmw1493.png?s=150"> 
     <br>
     <a href="https://github.com/jmw1493"> Jared Weiss </a> 
     <br>
     <!-- <a href="https://www.linkedin.com/in/jaredmweiss/"> LinkedIn </a> --> 
    </td>
   </tr> 
  </tbody> 
 </table> 
 
## Contributing

We'd love to have your helping hand on Watchpod. Please reach out if interested in contributing

