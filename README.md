Pending Tasks

1)sorting
2)pagination
3)search
4)Top bar finalize
5)logo pending
6)admin
7)book upload
8)add zoom effect on book cover
9)reviews



# Tale-EbookStore
E-book Marketplace created using Spring Boot and Angular

Cart Service Details -->

GET
Request ->
Response ->All database data

POST
Request->userID AND BookISBN number
====>add userID and BookISBN to database
Response->"Request Successfull"

PUT
Request->userID AND BookISBN number
====>append userID and BookISBN to database
Response->"Request Successfull"

DELETE
Request->userID AND BookISBN number
====>delete book with same ISBN number
Response->"Request Successfull"





Cart and wishlist Implementation

address -> 13.127.189.157:3000/getcart
address -> 13.127.189.157:3000/wishlist
get->
13.127.189.157:3000/wishlist
to see wishlist/cart
put->
13.127.189.157:3000
to add to wishlist/cart
