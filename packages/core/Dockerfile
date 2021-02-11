# TODO [refactor] use alpine and install online necessary tools
FROM golang:1.15.0-alpine as builder
# FROM golang@sha256:5219b39d2d6bf723fb0221633a0ff831b0f89a94beb5a8003c7ff18003f48ead AS builder

# Go
ENV GOOS=linux
ENV GOARCH=amd64
ENV CGO_ENABLED=0
ENV VERSION=latest
ENV COMMIT_SHA=master
ENV LDFLAGS="-X github.com/smartcontractkit/chainlink/core/store.Version=$VERSION -X github.com/smartcontractkit/chainlink/core/store.Sha=$COMMIT_SHA"
# User
# ENV USER=link
# ENV UID=10001

RUN \
  # Install dependencies
  apk add --update --no-cache --virtual .build-deps \
  # Build
  git \
  gcc \
  g++ \
  linux-headers \
  # Runtime
  # SSL
  ca-certificates \
  # Timezones
  tzdata \
  && update-ca-certificates
# cleanup
# && rm -rf /var/cache/apk/*

# RUN adduser \
#   --disabled-password \
#   --gecos "" \
#   # --home "/nonexistent" \
#   # --shell "/sbin/nologin" \
#   --no-create-home \
#   --uid "${UID}" \
#   "${USER}"

WORKDIR ${GOPATH}/src/chainlink
COPY . .

RUN \
  go get github.com/smartcontractkit/gencodec \
  # && go get github.com/ethereum/go-ethereum/cmd/abigen \
  && go mod download \
  && go mod verify \
  && go run ./packr/main.go ./services/eth \
  && go run ./packr/main.go ./services \
  && go generate ./core/internal/gethwrappers \
  # go get -d -v \
  && go build -ldflags=$LDFLAGS -o /go/bin/chainlink
# && apk del .build-deps

RUN echo "gopath:${GOPATH}"

# ------------------------------------------------------
# Finay layer
# ------------------------------------------------------
FROM scratch

COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=builder /usr/share/zoneinfo /usr/share/zoneinfo
COPY --from=builder /go/bin/chainlink /go/bin/chainlink
COPY --from=builder /go/bin/gencodec /go/bin/gencodec

# Use unprivileged user.
# USER link:link

EXPOSE 6688
ENTRYPOINT ["/go/bin/chainlink"]
CMD ["local", "node"]
