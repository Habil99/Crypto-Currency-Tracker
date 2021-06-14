import Layout from '../components/Layout'
import Main from '../components/Main'
import { getCurrencies } from '../services/currencyServices'
import { useState, useEffect } from 'react'
import { PageItem, Pagination } from 'react-bootstrap'
import router from 'next/router'

export default function Home({ data, page }) {
  console.log(data)
  return (
    <Layout>
      <Main data={data} />
      <Pagination className={'mb-5 justify-content-center'}>
        <PageItem className={'mr-3 btn btn-dark text-white'} onClick={() => router.push(`/?page=${page - 1}`)}>
          Prev
        </PageItem>
        <PageItem className={'btn btn-dark text-white'} onClick={() => router.push(`/?page=${page + 1}`)}>
          Next
        </PageItem>
      </Pagination>
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const data = await getCurrencies('EUR', page)

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      data: data.data,
      page: parseInt(page, 10)
    }
  }
}