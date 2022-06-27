FROM golang:1.15 AS builder

WORKDIR /app

COPY hello/ .

RUN GOOS=linux go build -o hello

FROM scratch

WORKDIR /app/go

COPY --from=builder /app/hello .
