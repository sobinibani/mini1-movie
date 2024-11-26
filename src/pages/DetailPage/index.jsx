import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import MovieDetail from "../../components/MovieDetail";
import { useFetchDetailMovies } from "../../hooks/useFetchMovies";

const DetailPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  // 영화 상세 데이터를 가져오는 커스텀 훅 호출
  useFetchDetailMovies(id);

  // Redux에서 가져온 영화 상세 데이터
  const detailMovie = useSelector((state) => state.movies.detailMovies);

  // 데이터 로딩 상태 처리
  useEffect(() => {
    setLoading(true); // 새로운 id로 변경되면 로딩 상태를 true로 설정
    if (detailMovie && Object.keys(detailMovie).length > 0) {
      setLoading(false); // 데이터가 로드되면 로딩 상태를 false로 설정
    }
  }, [id, detailMovie]); // id 또는 detailMovie가 변경될 때마다 실행

  // 데이터가 로드되지 않았으면 로딩 메시지 출력
  if (loading) {
    return <div className="Loading">Loading...</div>;
  }

  // 데이터가 로드되면 MovieDetail 컴포넌트로 전달
  return <MovieDetail detailMovie={detailMovie} />;
};

export default DetailPage;
