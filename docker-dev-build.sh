docker build \
  --build-arg APPLICATION_NAME="abra cadabra" \
  --build-arg BITBUCKET_COMMIT="-=docker-dev-build=-" \
  --build-arg BITBUCKET_TAG=DEVDEV \
  -t stefaanv/ts-home-automation:latest .
