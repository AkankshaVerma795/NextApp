import { useState } from "react";
//import { BsSearch } from 'react-icons/bs';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import React from "react";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import * as Tooltip from '@radix-ui/react-tooltip';
import { PlusIcon } from '@radix-ui/react-icons';
//import { setRevalidateHeaders } from "next/dist/server/send-payload";


const Table = () => {
 
    // const productList = ["blue pant"
    //     , "black pant"
    //     , "blue shirt"
    //     , "black shoes"
    //     , "brown shoes"
    //     , "white pant"
    //     , "white shoes"
    //     , "red shirt"
    //     , "gray pant"
    //     , "white shirt"
    //     , "golden shoes"
    //     , "dark pant"
    //     , "pink shirt"
    //     , "yellow pant"];
    // const [products, setProducts] = useState(productList);
    // const [searchVal, setSearchVal] = useState("");
    // function handleSearchClick() {
    //     if (searchVal === "") { setProducts(productList); return; }
    //     const filterBySearch = productList.filter((item) => {
    //         if (item.toLowerCase()
    //             .includes(searchVal.toLowerCase())) { return item; }
    //     })
    //     setProducts(filterBySearch);
    // }
  // const recordss=[
    
  //     {
  //       "id": 1,
  //       "name": "Leanne Graham",
  //       "username": "Bret",
  //       "email": "Sincere@april.biz",
  //       "address": {
  //         "street": "Kulas Light",
  //         "suite": "Apt. 556",
  //         "city": "Gwenborough",
  //         "zipcode": "92998-3874",
  //         "geo": {
  //           "lat": "-37.3159",
  //           "lng": "81.1496"
  //         }
  //       },
  //       "phone": "1-770-736-8031 x56442",
  //       "website": "hildegard.org",
  //       "company": {
  //         "name": "Romaguera-Crona",
  //         "catchPhrase": "Multi-layered client-server neural-net",
  //         "bs": "harness real-time e-markets"
  //       }
  //     },
  //     {
  //       "id": 2,
  //       "name": "Ervin Howell",
  //       "username": "Antonette",
  //       "email": "Shanna@melissa.tv",
  //       "address": {
  //         "street": "Victor Plains",
  //         "suite": "Suite 879",
  //         "city": "Wisokyburgh",
  //         "zipcode": "90566-7771",
  //         "geo": {
  //           "lat": "-43.9509",
  //           "lng": "-34.4618"
  //         }
  //       },
  //       "phone": "010-692-6593 x09125",
  //       "website": "anastasia.net",
  //       "company": {
  //         "name": "Deckow-Crist",
  //         "catchPhrase": "Proactive didactic contingency",
  //         "bs": "synergize scalable supply-chains"
  //       }
  //     },
  //     {
  //       "id": 3,
  //       "name": "Clementine Bauch",
  //       "username": "Samantha",
  //       "email": "Nathan@yesenia.net",
  //       "address": {
  //         "street": "Douglas Extension",
  //         "suite": "Suite 847",
  //         "city": "McKenziehaven",
  //         "zipcode": "59590-4157",
  //         "geo": {
  //           "lat": "-68.6102",
  //           "lng": "-47.0653"
  //         }
  //       },
  //       "phone": "1-463-123-4447",
  //       "website": "ramiro.info",
  //       "company": {
  //         "name": "Romaguera-Jacobson",
  //         "catchPhrase": "Face to face bifurcated interface",
  //         "bs": "e-enable strategic applications"
  //       }
  //     },
  //     {
  //       "id": 4,
  //       "name": "Patricia Lebsack",
  //       "username": "Karianne",
  //       "email": "Julianne.OConner@kory.org",
  //       "address": {
  //         "street": "Hoeger Mall",
  //         "suite": "Apt. 692",
  //         "city": "South Elvis",
  //         "zipcode": "53919-4257",
  //         "geo": {
  //           "lat": "29.4572",
  //           "lng": "-164.2990"
  //         }
  //       },
  //       "phone": "493-170-9623 x156",
  //       "website": "kale.biz",
  //       "company": {
  //         "name": "Robel-Corkery",
  //         "catchPhrase": "Multi-tiered zero tolerance productivity",
  //         "bs": "transition cutting-edge web services"
  //       }
  //     },
  //     {
  //       "id": 5,
  //       "name": "Chelsey Dietrich",
  //       "username": "Kamren",
  //       "email": "Lucio_Hettinger@annie.ca",
  //       "address": {
  //         "street": "Skiles Walks",
  //         "suite": "Suite 351",
  //         "city": "Roscoeview",
  //         "zipcode": "33263",
  //         "geo": {
  //           "lat": "-31.8129",
  //           "lng": "62.5342"
  //         }
  //       },
  //       "phone": "(254)954-1289",
  //       "website": "demarco.info",
  //       "company": {
  //         "name": "Keebler LLC",
  //         "catchPhrase": "User-centric fault-tolerant solution",
  //         "bs": "revolutionize end-to-end systems"
  //       }
  //     },
  //     {
  //       "id": 6,
  //       "name": "Mrs. Dennis Schulist",
  //       "username": "Leopoldo_Corkery",
  //       "email": "Karley_Dach@jasper.info",
  //       "address": {
  //         "street": "Norberto Crossing",
  //         "suite": "Apt. 950",
  //         "city": "South Christy",
  //         "zipcode": "23505-1337",
  //         "geo": {
  //           "lat": "-71.4197",
  //           "lng": "71.7478"
  //         }
  //       },
  //       "phone": "1-477-935-8478 x6430",
  //       "website": "ola.org",
  //       "company": {
  //         "name": "Considine-Lockman",
  //         "catchPhrase": "Synchronised bottom-line interface",
  //         "bs": "e-enable innovative applications"
  //       }
  //     },
  //     {
  //       "id": 7,
  //       "name": "Kurtis Weissnat",
  //       "username": "Elwyn.Skiles",
  //       "email": "Telly.Hoeger@billy.biz",
  //       "address": {
  //         "street": "Rex Trail",
  //         "suite": "Suite 280",
  //         "city": "Howemouth",
  //         "zipcode": "58804-1099",
  //         "geo": {
  //           "lat": "24.8918",
  //           "lng": "21.8984"
  //         }
  //       },
  //       "phone": "210.067.6132",
  //       "website": "elvis.io",
  //       "company": {
  //         "name": "Johns Group",
  //         "catchPhrase": "Configurable multimedia task-force",
  //         "bs": "generate enterprise e-tailers"
  //       }
  //     },
  //     {
  //       "id": 8,
  //       "name": "Nicholas Runolfsdottir V",
  //       "username": "Maxime_Nienow",
  //       "email": "Sherwood@rosamond.me",
  //       "address": {
  //         "street": "Ellsworth Summit",
  //         "suite": "Suite 729",
  //         "city": "Aliyaview",
  //         "zipcode": "45169",
  //         "geo": {
  //           "lat": "-14.3990",
  //           "lng": "-120.7677"
  //         }
  //       },
  //       "phone": "586.493.6943 x140",
  //       "website": "jacynthe.com",
  //       "company": {
  //         "name": "Abernathy Group",
  //         "catchPhrase": "Implemented secondary concept",
  //         "bs": "e-enable extensible e-tailers"
  //       }
  //     },
  //     {
  //       "id": 9,
  //       "name": "Glenna Reichert",
  //       "username": "Delphine",
  //       "email": "Chaim_McDermott@dana.io",
  //       "address": {
  //         "street": "Dayna Park",
  //         "suite": "Suite 449",
  //         "city": "Bartholomebury",
  //         "zipcode": "76495-3109",
  //         "geo": {
  //           "lat": "24.6463",
  //           "lng": "-168.8889"
  //         }
  //       },
  //       "phone": "(775)976-6794 x41206",
  //       "website": "conrad.com",
  //       "company": {
  //         "name": "Yost and Sons",
  //         "catchPhrase": "Switchable contextually-based project",
  //         "bs": "aggregate real-time technologies"
  //       }
  //     },
  //     {
  //       "id": 10,
  //       "name": "Clementina DuBuque",
  //       "username": "Moriah.Stanton",
  //       "email": "Rey.Padberg@karina.biz",
  //       "address": {
  //         "street": "Kattie Turnpike",
  //         "suite": "Suite 198",
  //         "city": "Lebsackbury",
  //         "zipcode": "31428-2261",
  //         "geo": {
  //           "lat": "-38.2386",
  //           "lng": "57.2232"
  //         }
  //       },
  //       "phone": "024-648-3804",
  //       "website": "ambrose.net",
  //       "company": {
  //         "name": "Hoeger LLC",
  //         "catchPhrase": "Centralized empowering task-force",
  //         "bs": "target end-to-end models"
  //       }
  //     }
  // ]
  const column = [
    {
      name: "ID",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
  ];
  const customStyles = {
    header: {
      style: {
        backgroundColor: "red",
      },
    },
  };

  useEffect(() => {
    const fetData = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);

        setRecords(res.data);
        setFilterRecords(res.data);
      })
      .catch((err) => console.log(err));
    };
    fetData();
  }, []);

  const [records, setRecords] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);
  const [query,setQuery]=useState('');
{/*// const [data, setData]=useState([]);
// const [searchApiData, setSearchApiData]=useState([]);
// const [filterVal,setFilterVal]=useState('');*/}
  // const handleFilter = (e) => {
  //   const newData = records.filter((row) =>
  //     row.name.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   console.log("user value",e.target.value,records)
  //   setRecords(newData);
 const handleFilter = (e) => {
//   return items.filter((item) => {
//     return searchParam.some((newItem) => {
//         return (
//             item[newItem]
//                 .toString()
//                 .toLowerCase()
//                 .indexOf(e.toLowerCase()) > -1
//         );
//     });
// });
}
  };
  // const handleFilter=(e)=>{
  //   if(e.target.value==' '){
  //     setData(searchApiData);
  //   }else{
  //     const filterResult= searchApiData.filter(item=>item.name.toLowerCase()|| item.name.toLowerCase().includes(e.target.value.toLowerCase()))
  //     //setRecords(filterResult)
  //     setData(filterResult)
  //   }
  //  // setFilterRecords(e.target.value);filterResult
  //  setFilterVal(e.target.value)
  
  // }
  const handleInputChange=(e)=>{
  setQuery(e.target.value);
  }
 
  return (
    <div style={{ padding: "0px 10%", backgroundColor: "gray" }}>
      <div style={{ display: "flex", justifyContent: "right" }}>  
      
    {/*//   <button placeholder="search..."onClick={handleFilter} style={{padding: '6px 10px'}}>Redirect</button>
  // </div>*/}
      <input type="text" placeholder="search..." onChange={handleFilter} style={{padding: '6px 10px'}}></input>
   </div>
{/*   <div>
//    <div style={mystyle}>
//        <input onChange={e => setSearchVal(e.target.value)}>
//        </input>
//        <BsSearch onClick={handleSearchClick} />
//    </div>
//    <div>

//        {products.map((product) => {
//            return (
//                <div style={mystyle}>{product}</div>
//            )
//        })
//        }

//    </div>
// </div>*/}
      <div>
      <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={column}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            // src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
      />
           {option.name} {option.ID} {option.email}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a ID"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    /> </div>
      <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="IconButton">
            <PlusIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5}>
            Add 
            <Tooltip.Arrow className="TooltipArrow" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
      <DataTable
        columns={column}
        data={records}
        customStyles={customStyles}
        pagination
        selectableRows
      ></DataTable>     
    </div>
  );
};

export default Table;
