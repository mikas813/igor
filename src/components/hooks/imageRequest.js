import {useState, useEffect} from 'react';
import axios from 'axios/index';

export function useAxiosGet(url) {
  const [imageUrl, setImageUrl] = useState( {
    loading: false,
    data: null
  } );

  useEffect( () => {
    setImageUrl( {
      loading: true,
      data: null,
      error: false
    } );
    axios.get( url )
      .then( response => {
        setImageUrl( {
          loading: false,
          data: response.data,
          error: false
        } );
      } )
      .catch( () => {
        setImageUrl( {
          loading: false,
          data: null,
          error: true
        } );
      } );
  }, [url] );

  return imageUrl;
}