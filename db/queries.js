exports.queryList={

    GET_STORE_LIST_QUERY:"select store_id, store_name, store_code ,created_on, created_by, address from book.store",
    SAVE_STORE_QUERY:"insert into book.store (store_name, store_code, created_on, created_by, address) values($1, $2, $3, $4, $5)",
    
    GET_BOOK_QUERY:"select book_id, book_title, book_description, book_author, book_publisher from book.book",
    GET_BOOK_DETAILS_QUERY:"select book_id, book_title, book_description, book_author, book_publisher, book_pages, store_code from book.book where book_id=$1",
   
   SAVE_BOOK_QUERY:"insert into book.book (book_title, book_description, book_author,book_publisher, book_pages, store_code, created_on, created_by) values($1, $2, $3, $4, $5, $6, $7, $8)",
   UPDATE_BOOK_QUERY:"update book.book set book_title=$1, book_description=$2, book_author=$3, book_publisher=$4, book_pages=$5, store_code=$6, created_on=$7, created_by=$8 where book_id=$9",
   DELETE_BOOK_QUERY:"DELETE FROM book.book WHERE book_id=$1"
    
    }