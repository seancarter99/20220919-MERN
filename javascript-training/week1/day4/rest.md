## HTTP

Hyper Text Transfer Protocol
- The language of the web
- The primary way to send and receive data across the internet

# HTTP Request
- I send off an HTTP request to a particular domain asking for or to do something
- The intent of an HTTP request is indicated by its "request method"

# HTTP Methods
HTTP methods imply intent

- GET (Retrieving/Reading a resource)
- POST (Creating a resource)
- PUT (Updating/Replacing a resource)
- DELETE (Deleting a resource)
- HEAD (Same as GET, but the Response Body is ignored)
- PATCH (Similar to PUT, but it updates what's already there. PUT takes out, then puts in the new resource)
- OPTIONS (A request to see what the server allows. This is automatically sent during pre-flight CORS)

# HTTP Response
- What is returned by the web server after sending an HTTP request
- The outcome of a given HTTP response is indicated based on its "status code"

## HTTP Status Codes
Status codes merely indicate intent. It is a common set of standards that we should abide by

# 1xx (Informational)
- 100 Continue
- 103 Early Hints
# 2xx (Success)
- 200 OK
- 201 Created
- 204 No Content
# 3xx (Redirection)
- 307 Temporary Redirect
- 308 Permanent Redirect
# 4xx (Client Error) (YOU messed up)
- 400 Bad Request
- 401 Unauthorized (Unauthenticated)
- 403 Forbidded (Unauthorized)
- 404 Not Found
- 405 Method Not Allowed
- 418 I'm a teapot
# 5xx (Server Error) (THEY messed up)
- 500 Internal Server Error
- 502 Bad Gateway
- 504 Gateway Timeout

## Idempotent vs Safe

## REST