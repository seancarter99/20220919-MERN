## REST

REpresentational State Transfer

REST is a paradigm for making APIs

# 6 Architectural Contrainsts of REST
1. Uniform Interface
    - Each resource should only have ONE logical URI/URL
2. Client-Server
    - The client and server should be separate
    - Decoupled architecture in that the client only knows the server through the API endpoints it exposes
    - Allows the client and server to evolve independent of one another
3. Stateless
    - Stateless means no data is stored in memory. Server does not remember clients or keep some internal variable count
    - All client-server interactions should be stateless
    - The server should treat all requests as brand new requests
    - Client can be in charge of state management
4. Cacheable
    - Requests should be able to be cached in order to speed up lookup time
    - A resource should be cached if its indicated in the HTTP headers
    - Expires or Cache-Control
5. Layered System
    - Gateways
    - The client talks to the gateway/load balancer and it will direct traffic to the actual servers
    - Client doesn't know about the servers (there could 1 server or 10,000. It doesn't matter)
6. Code on Demand (optional)
    - Have the ability to return executable code

## URL Naming

When building APIs, it's very important that you name your URLs to be logical

# Let the HTTP method carry the meaning (Just use nouns. No verbs)

Find All Movies
- Bad: GET https://www.mysite.com/findAllMovies
- Good: GET https://www.mysite.com/movies

Find a specific movie with an id of 2
- Good: GET https://www.mysite.com/movies/2

# URLs should be hierarchical (Think of it like a file system)

Find all actors
- Good: GET https://www.mysite.com/actors

Find all actors of a specific movie with an id of 2
- Good: GET https://www.mysite.com/movies/2/actors

Find all movies that feature a particular actor with an id of 1
- Good: GET https://www.mysite.com/actors/1/movies

# Filtering Results

Make use of query parameters to pass in additional constraints

Find 5 movies
- Bad: GET https://www.mysite.com/findFiveMovies
- Good: GET https://www.mysite.com/movies?limit=5

Find 5 movies where the language is English
- Good: GET https://www.mysite.com/movies?limit=5&lang=en-us

# Versioning

Versioning URLs is VERY important so that the API can be updated/upgraded in the future
Allows us to use mostly the same URL name, but version a specific section of it

Instead of just outright removing the old API, we introduce one and notify people to switch over to it

BAD:
- OLD: https://www.mysite.com/movies/1 -> "Star Wars"
- NEW: https://www.mysite.com/movies/1 -> { title: "Star Wars", director: "George Lucas" }

GOOD:
- OLD: https://www.mysite.com/v1/movies/1 -> "Star Wars"
- NEW: https://www.mysite.com/v2/movies/1 -> { title: "Star Wars", director: "George Lucas" }