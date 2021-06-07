exports.queryList={

    GET_STORE_LIST_QUERY:"select store_id, store_name, store_code ,created_on, created_by, address from book.store",
    SAVE_STORE_QUERY:"insert into book.store (store_name, store_code, created_on, created_by, address) values($1, $2, $3, $4, $5)",
    

    
    }