include build/Makefile.core.mk
include build/Makefile.show-help.mk

check:
	golangci-lint run

check-clean-cache:
	golangci-lint cache clean

test:
	go test ./...

errorutil:
	go run github.com/khulnasoft/meshplay/meshkit/cmd/errorutil -d . update --skip-dirs meshplay -i ./helpers -o ./helpers

errorutil-analyze:
	go run github.com/khulnasoft/meshplay/meshkit/cmd/errorutil -d . analyze --skip-dirs meshplay -i ./helpers -o ./helpers

build-errorutil:
	go build -o errorutil cmd/errorutil/main.go
