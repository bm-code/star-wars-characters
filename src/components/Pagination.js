import './Pagination.css'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { IconContext } from 'react-icons';

export default function Pagination({ page, setPage }) {
    return (
        <div>
            <div className="pagination">
                <IconContext.Provider value={{ className: "button-icon" }}>
                    {page > 1 ? <button onClick={() => setPage(page - 1)}><FiArrowLeft /> Previous page</button> : ''}
                    {page < 9 ? <button onClick={() => setPage(page + 1)}>Next page <FiArrowRight /></button> : ''}
                </IconContext.Provider>
            </div>
        </div>
    )
}
