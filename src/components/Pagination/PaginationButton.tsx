import React, {useState} from 'react'

const PaginationButton = ({limit, page, pagination, setPage}: any) => {
    const { total_count, count} = pagination
    const noOfPages = Math.ceil(total_count/count)
    const [val, setVal] = useState({val1:0, val2:10})
    const {val1, val2} = val;

    const getNumbers =() => {
        let pageNumbers = [];
        for(let i=1; i<= noOfPages; i++) {
            pageNumbers.push(`${i}`);
        }

        pageNumbers = pageNumbers.slice(val1, val2)

        return pageNumbers.map(number => {
            return (
                <i className={ page === number ? "activePage" : "pagesNumbered"} onClick={() => setPage(number)}>
                    {number}
                </i>
            );
        })
    }
    return (
        <div style={{ margin:'20px 20px 70px 20px'}}>
            <p></p>

           { val1 === 0 ? ' ' : (
               <>
               <i
                className="fa fa-arrow-left"
                aria-hidden="true">
               </i>

                <span style={{ cursor: 'pointer'}} onClick={()=>setVal({val1: val1 === 1 ? val1 : val1-1, val2: val2 === 10 ? val2: val2-1})}> Prev</span>
               </> 
           )
        } 
          {
              getNumbers()
          }

          { page >= noOfPages ? '' : (
              <>
                <i 
                className="fa fa-arrow-right"
                aria-hidden="true">
                </i>
                <span style={{ cursor: 'pointer'}} onClick={()=>setVal({val1:val1+1, val2:val2+1})}> Next</span>
              </>
          )}
        </div>
    )
}

export default PaginationButton;
