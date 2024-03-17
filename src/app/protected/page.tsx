"use client";
import React, { useState, useEffect, useMemo } from 'react';
import Heading from '~/components/Heading/Heading';
import randomObjects from '~/utils/randomObject';
import Pagination from '~/components/Pagination/Pagination';

interface RandomObject {
    id: number;
    name: string;
    checked: boolean;
}

function Page() {
    const [showPageArray, setShowPageArray] = useState<RandomObject[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [randomObjectsArray, setRandomObjectsArray] = useState<RandomObject[]>([]);

    useMemo(() => {
        let array: RandomObject[] = [];
        if (typeof window !== 'undefined') {
            const localStorageData = localStorage.getItem('randomObjectsArray');
            if (localStorageData) {
                array = JSON.parse(localStorageData) as RandomObject[];
            } else {
                array = randomObjects.map(obj => ({ ...obj, checked: false }));
                localStorage.setItem('randomObjectsArray', JSON.stringify(array));
            }
        } else {
            // console.warn('localStorage is not available.');
        }
        setRandomObjectsArray(array);
    }, []); // Empty dependency array ensures useMemo runs only once

    useEffect(() => {
        setShowPageArray(paginate(randomObjectsArray, 6, currentPage));
    }, [currentPage, randomObjectsArray]); // Include randomObjectsArray in the dependency array

    function paginate<T>(array: T[], page_size: number = 6, page_number: number): T[] {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleCheckboxChange = (id: number) => {
        const updatedArray = randomObjectsArray.map(obj =>
            obj.id === id ? { ...obj, checked: !obj.checked } : obj
        );
        localStorage.setItem('randomObjectsArray', JSON.stringify(updatedArray));
        setRandomObjectsArray(updatedArray);
        setShowPageArray(paginate(updatedArray, 6, currentPage));
    };

    return (
        <>
            <div className='min-h-screen '>
                <Heading />
                <div className='bg-white flex flex-col items-center justify-center mt-10'>
                    <div className='border-grey-400 rounded-xl border-2 w-96 ml-32 flex flex-col items-start  justify-center p-8   '>
                        <div className='p-4 mt-2 w-80 flex flex-col justify-center items-center '>
                            <h1 className='text-xl font-sans font-bold '>Please mark your interests!</h1>
                        </div>
                        <div className='w-80 flex flex-col justify-center items-center'>
                            <p className='text-sm font-sans font-light'>We will keep you notified.</p>
                        </div>
                        <div className='flex flex-col justify-center items-start px-4 mt-6'>
                            <p className='text-sm font-medium'>My saved interests!</p>
                        </div>
                        <div>
                            <div className='flex flex-col justify-center items-start w-80'>
                                {showPageArray.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className='flex flex-col w-full justify-center items-start m-2 p-2'
                                        >
                                            <div className='flex flex-row gap-2 justify-between items-center'>
                                                <input
                                                    type='checkbox'
                                                    className='h-4 w-4'
                                                    checked={item.checked}
                                                    onChange={() => handleCheckboxChange(item.id)}
                                                />
                                                <p className='text-sm font-sans font-light'>{item.name}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <Pagination
                                currentPage={currentPage}
                                totalPages={17}
                                maxPagesToShow={7}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
