# Watchpod Demo

## Overview
This demo shows how to set up and run watchpod when creating docker images and kubernetes objects within the Minikube environment.

## Step By Step
```
# (1) start minikube and set kubectl and docker to minikube environment
minikube start --vm-driver=xhyve
kubectl config use-context minikube
eval $(minikube docker-env)

# (2) clone repo and create build webpack bundle
git clone https://github.com/MinikubeAddon/watchpod.git
cd watchpod/demo/frontend
npm install
npm run build

# (3) mount the path that you want watchpod to keep track of
# open a new tab in same shell
minikube mount /path/to/watchpod/demo:/mount-9p

# (4) pull and run watchpod service
# open a new tab in same shell
kubectl apply -f https://raw.githubusercontent.com/MinikubeAddon/watchpod/master/watchpod.yaml
minikube service watchpod  # may take a couple minutes when pulling the first time
```

## More
For information on how to set up Minikube, visit <a href="https://kubernetes.io/docs/getting-started-guides/minikube/">https://kubernetes.io/docs/getting-started-guides/minikube/</a>
