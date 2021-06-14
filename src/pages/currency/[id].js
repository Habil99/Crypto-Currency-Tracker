import { getCurrency } from '../../services/currencyServices'
import Head from 'next/head'
import ChartCurrency from '../../components/ChartCurrency'
import { Container, Button, Row, Col } from 'react-bootstrap'
import CurrencyInfo from '../../components/CurrencyInfo'

function Currency({ data, title }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <Container>
                <Row>
                    <Col sm="3">
                        <Button className="btn-outline-dark btn-light mt-3 w-100" onClick={() => window.history.back()}>
                            Back to the main
                        </Button>
                    </Col>
                    <Col>
                        <CurrencyInfo data={data[0]} />
                        <ChartCurrency currency={data[0]} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const data = await getCurrency(params.id)

    return {
        props: {
            data: data.data,
            title: `${params.id} coin`
        }
    }
}

export default Currency;