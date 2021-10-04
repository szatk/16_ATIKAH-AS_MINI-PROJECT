import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://atikahchan.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "il1Mgp4iAumou0493XcOcx64Ksf46CncBWQ2akaxhlG2UZkek5a2herJvtUOOOr4",

  },
});

export default client;

const GET_SHOES = gql`
  query MyQuery {
    Produk {
      id_Kategori
      deskripsi_Produk
      gambar
      harga
      id
      is_ready
      nama
      size1
      size2
      size3
      Kategori {
        Tanggal
        id
      }
    }
  }
  `

  const GET_MYSHOES = gql`
  query MyQuery($id_Kategori: Int!) {
    Produk(where: {id_Kategori: {_eq: $id_Kategori}}) {
      gambar
      deskripsi_Produk
      harga
      id
      id_Kategori
      is_ready
      nama
      size1
      size2
      size3
    }
  }  
`
// export const GET_SHOES = gql`
// query MyQuery {
//   Produk {
//     id_Kategori
//     deskripsi_Produk
//     gambar
//     harga
//     id
//     is_ready
//     nama
//     size1
//     size2
//     size3
//     Kategori {
//       Tanggal
//       id
//     }
//   }
// }
// `

// // Tanda seru pada "$id: Int!" artinya saat passing variable "id", nilainya GA BOLEH NULL
// export const GET_MYSHOES = gql`
//   query MyQuery($id: Int!) {
//     Produk_by_pk(id: $id) {
//       deskripsi_Produk
//       gambar
//       harga
//       id
//       is_ready
//       id_Kategori
//       nama
//       size1
//       size2
//       size3
//       Kategori {
//         Tanggal
//         id
//       }
//     }
//   }
// `