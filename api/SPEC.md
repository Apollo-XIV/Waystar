# API Specification

## Entities
- **Book**
- **Category**
- **Entry**
- **Log**
- **User**

## Entry Endpoints
 - [ACTIVE][PROTECTED] GET"/timeline" => create and return user's timeline
 - [ACTIVE][PROTECTED] POST"/new" => create new entry
 - GET"/" => find all entries
 - DELETE"/:id" => delete entry by id
 - POST"/test" => simple test route
