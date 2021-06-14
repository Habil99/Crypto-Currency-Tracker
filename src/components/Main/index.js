import { Table } from 'react-bootstrap'
import styles from './Main.module.scss'
import DetailsIcon from '@material-ui/icons/Details';
import Link from 'next/link';
import { useState } from 'react';

const Main = ({ data }) => {
    return (
        <div className={`table-responsive-lg mt-5 ${styles.main_wrapper}`}>
            <Table className={`border-0 table-hover ${styles.table_currencies}`}>
                <thead>
                    <tr>
                        <th></th>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Price Change (ytd)</th>
                        <th scope="col">Market Cap</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(currency => (
                        <tr key={currency.id}>
                            <td>
                                <img src={currency.logo_url} alt={currency.id} />
                            </td>
                            <td className={'py-3'}>{currency.rank}</td>
                            <td className={'py-3'}>
                                {currency.currency}
                            </td>
                            <td className={'py-3'}>{Number(currency.price).toFixed(2)}</td>
                            <td className={'py-3'}>{Number(currency.ytd.price_change).toFixed(4)}</td>
                            <td className={'py-3'}>{Number(currency.market_cap).toLocaleString()}</td>
                            <td>
                                <Link scroll={true} href={`/currency/${currency.id}`} passHref>
                                    <a className={'btn btn-dark text-white'}>
                                        Details
                                        <DetailsIcon />
                                    </a>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default Main
