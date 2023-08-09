import React,{useState,useEffect} from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import '../styles/jwt.css';

const Jwt = () => {

    const [token,setToken] = useState("");
    const [errMsg,setErrMsg] = useState("");

    useEffect(() => {
    const fetchData = async() => {
      try{ 
      const response = await axios.get("https://app-dev.certicos.io/api/document-transaction-details/DOCBACGBNVYCTWP2NI");
      console.log("response data => ", response.data.token);
      if(response.status === 200){
        setToken( response.data.token)
      }else{
        setErrMsg("Error fetching token details. Please try again")
      }
      }catch(error){
        console.log("error while fetching token data" , error.message);
      }
    }
    fetchData();
    },[token]);

console.log("coded token =>", token);

    try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded token =>",decodedToken );

        const tokenEntries = Object.entries(decodedToken);
        console.log("token object entries (tokenEntries) =>",tokenEntries );

        return (
          <div>
            <h2>Decoded Token Data</h2>
            <table>
              <tbody>
                {tokenEntries.map(([key, value], index) => (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } catch (error) {
        return <div>Error decoding token</div>;
      }

}

export default Jwt;