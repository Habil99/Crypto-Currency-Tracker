import React, { Component } from 'react'
import styles from './index.module.scss'
import FilterResults from '../../components/FilterResults'

class CurrencyInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: new Array(this.props.data)[0]
        }
        this.convertToLocale = this.convertToLocale.bind(this)
        this.convertToValidDate = this.convertToValidDate.bind(this)
    }

    convertToLocale(value) {
        return Number(value).toLocaleString('en-US') + ' €'
    }

    convertToValidDate(date) {
        return new Date(date).toDateString()
    }

    render() {
        return (
            <>
                <FilterResults />
                <div className={styles.info_wrapper}>
                    <h1 className={styles.heading}>
                        {this.state.data.rank}.
                    {this.state.data.name} <sup>({this.state.data.currency})</sup>
                        <img className={styles.heading_img} src={this.state.data.logo_url} alt={this.state.data.currency} />
                        <div className={this.state.data.status === 'active' ? styles.active_status : styles.passive_status}></div>
                    </h1>
                    {/* <div className={styles.info_wrapper.row}>
                    <div className={styles.info_wrapper_row}>
                        {}
                    </div>
                </div> */}
                    <div className={styles.info_wrapper_row}>
                        <div className={styles.info_wrapper_col}>
                            <p className={styles.info_wrapper_col_title}>Price:</p>
                            <p className={styles.info_wrapper_col_info}>{this.convertToLocale(this.state.data.price)} ({this.convertToValidDate(this.state.data.price_date)})</p>
                        </div>
                        <div className={styles.info_wrapper_col}>
                            <p className={styles.info_wrapper_col_title}>The number of exchanges:</p>
                            <p className={styles.info_wrapper_col_info}>{this.state.data.num_exchanges}</p>
                        </div>
                    </div>
                    <div className={styles.info_wrapper_row}>
                        <div className={styles.info_wrapper_col}>
                            <p className={styles.info_wrapper_col_title}>Market Cap:</p>
                            <p className={styles.info_wrapper_col_info}>{this.convertToLocale(this.state.data.market_cap)}</p>
                        </div>
                        <div className={styles.info_wrapper_col}>
                            <p className={styles.info_wrapper_col_title}>First Candle:</p>
                            <p className={styles.info_wrapper_col_info}>{this.convertToValidDate(this.state.data.first_candle)}</p>
                        </div>
                    </div>
                    <div className={styles.info_wrapper_row}>
                        <div className={styles.info_wrapper_col}>
                            <p className={styles.info_wrapper_col_title}>The hightest Price:</p>
                            <p className={styles.info_wrapper_col_info}>{this.convertToLocale(this.state.data.high)}</p>
                        </div>
                        <div className={styles.info_wrapper_col}>
                            <p className={styles.info_wrapper_col_title}>Circulating Supply:</p>
                            <p className={styles.info_wrapper_col_info}>{this.convertToLocale(this.state.data.circulating_supply)}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default CurrencyInfo