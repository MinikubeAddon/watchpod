# Watchpod Demo

## Overview
This demo shows how to set up and run watchpod when creating docker images and kubernetes objects within the Minikube environment.

## Step By Step 
## Minikube
```
# (1) start minikube and set kubectl and docker to minikube environment
minikube start --vm-driver=... <-- (virtualbox, hyperkit, xhyve, etc.)
kubectl config use-context minikube
eval $(minikube docker-env)

# (2) mount the path that you want watchpod to keep track of
git clone https://github.com/MinikubeAddon/watchpod.git
minikube mount /path/to/watchpod/demo:/mount-9p

# (3) build webpack bundle
# open a new tab in same shell
cd watchpod/demo/frontend
npm install
npm run build

# (4) pull and run watchpod service
# open a new tab in same shell
kubectl apply -f https://raw.githubusercontent.com/MinikubeAddon/watchpod/master/watchpod.yaml
minikube service watchpod  # may take a couple minutes when pulling the first time
```

## Docker for Mac Kubernetes
```
# (1) set docker environment to docker-on-desktop
kubectl config use-context docker-for-desktop

# (2) clone repo
git clone https://github.com/MinikubeAddon/watchpod.git

# (3) change mountPath
# change the mountPath in the watchpod.yaml file from */mount-9p* to the path of the directory you want to watch 
# ie */path/to/watchpod/demo*

# (4) build webpack bundle
cd watchpod/demo/frontend
npm install
npm run build

# (5) pull and run watchpod service
# open new tab in same shell
kubectl create -f /path/to/watchpod/watchpod.yaml

# open browser window to http://localhost:{watchpod service nodePort} <-- found with kubectl get services
```

## More
For information on how to set up Minikube, visit <a href="https://kubernetes.io/docs/getting-started-guides/minikube/">https://kubernetes.io/docs/getting-started-guides/minikube/</a>
