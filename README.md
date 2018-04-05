# Watchpod &middot; ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

Watchpod is a minikube addon that detects file changes, then automates the build and deployment of local k8 nodes

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

This will open a localhost with your app. 
- note: there is a build time between running kubectl apply and minikube service. We are working to reduce it

Video goes here
<img src='https://cdn.rawgit.com/MinikubeAddon/watchpod/ce9b5363/Watchpod-first-vid.mp4' width='600' alt='npm start'>

## Applying the manifest 

```
kubectl apply -f https://raw.githubusercontent.com/MinikubeAddon/watchpod/master/watchpod.yaml
```

## Install on Minikube

Watchpod is currently not available on [Minikube]. We are in the process of tightening up the code for submission.
You can fork our [Minikube clone], then follow the instructions on [build guide] to run the addon from Minikube locally:

```
 ./out/minikube addons enable freshpod
```

## Contributing

We'd love to have your helping hand on Watchpod. Please reach out if interested in contributing

