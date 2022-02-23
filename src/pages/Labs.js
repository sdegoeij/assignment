import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import LabCard from "../components/LabCard";
import MainLayout from "../layout/MainLayout";
import Pagination from "../components/Pagination";

import { getLabs } from "../service/LabService";
import { personalInformationState } from "../state/PersonalInformationState";

const PER_PAGE = 12;

const Labs = () => {
  const [personalInfo, setPersonalInfo] = useRecoilState(
    personalInformationState
  );

  const [labs, setLabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const rowSkeletons = 8;

  useEffect(() => {
    getLabs(personalInfo.username, currentPage).then((data) => {
      setTotal(data.total);
      setLabs(data.labs);

      setLoading(false);
    });
  }, [currentPage, personalInfo]);

  const paginate = (page) => {
    setCurrentPage(page);
    setLoading(true);
  };

  if (loading) {
    let skeletonCards = [];

    for (let index = 0; index < rowSkeletons; index++) {
      skeletonCards.push([<LabCard loading={true} />]);
    }

    return (
      <MainLayout>
        <div className="px-8 grid grid-cols-1 gap-8 mt-12 xl:mt-12 xl:gap-12 md:grid-cols-3 xl:grid-cols-4 overflow-hidden">
          {skeletonCards}
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {total > 0 ? (
        <>
          <div className={"px-8 grid grid-cols-1 gap-8 mt-12 xl:mt-12 xl:gap-12 md:grid-cols-3 xl:grid-cols-4" + (loading ? 'overflow-hidden' : '')}>
            {labs && labs.map((lab) => <LabCard loading={false} key={lab.id} lab={lab} />)}
          </div>

          {total > PER_PAGE ? 
          <div className="flex items-center justify-center mt-8 mb-8">
            <Pagination
              current={currentPage}
              total={total}
              paginate={paginate}
              perPage={PER_PAGE}
            />
          </div>
          : <></> }
        </>
      ) : (
        <div className="flex items-center justify-center mt-8 mb-8">
          No results
        </div>
      )}
    </MainLayout>
  );
};

export default Labs;
