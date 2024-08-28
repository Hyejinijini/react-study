import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // api 주소를 url 로 넘겨받아서 fetch 하고
    fetch(url)
      .then((res) => {
        return res.json();
      })
      // 응답받은 데이터를 setData 해줌
      .then((data) => {
        setData(data);
      });
  }, [url]);

  // 최종적으로 data 를 return
  return data;
}
