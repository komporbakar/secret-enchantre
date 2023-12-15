import React from "react";
import CardProduct from "./molecules/CardProduct";
import ContentItem from "./molecules/ContentItem";
import Image from "next/image";

const Products = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <section className="md:mb-48 px-5 md:px-24">
        <h3 className="text-lg font-bold text-center my-6 md:text-4xl md:mb-24">
          New Product{" "}
        </h3>
        <div className="flex flex-wrap ">
          {data
            ? data?.map((item, i) => {
                // console.log(item.image[0]?.image);
                return (
                  <CardProduct
                    key={i}
                    name={item.name}
                    price={item.price}
                    image={item?.image[0]}
                    slug={item.slug}
                  ></CardProduct>
                );
              })
            : "Not Found"}
        </div>
      </section>
      <section className="md:px-24 px-5 md:mb-48">
        <h3 className="text-lg font-bold text-center my-6 mb-12 md:mb-24 md:text-4xl">
          We Provide Best Customer Experience
        </h3>
        <div className="flex flex-wrap">
          <ContentItem
            title="Original Product"
            image="original"
            description="We provide money back guarantee if the product are not original"
          />
          <ContentItem
            title="Satisfaction Guarantee"
            image="guarantee"
            description="We provide money back guarantee if the product are not original"
          />
          <ContentItem
            title="Original Product"
            image="new-arrival"
            description="We provide money back guarantee if the product are not original"
          />
          <ContentItem
            title="Original Product"
            image="fast-shipping"
            description="We provide money back guarantee if the product are not original"
          />
        </div>
      </section>
      <section className="bg-[#E4E4E4] mb-48  md:flex">
        <div className="md:px-24 pb-24 px-6">
          <h3 className="text-lg font-bold text-center my-6 mb-12 md:mb-24 pt-10 md:text-4xl">
            OUR CATEGORY
          </h3>
          <div className="md:grid md:grid-rows-4 flex flex-wrap grid-flow-col gap-3">
            <div className="row-span-4 col-span-2 relative w-full">
              <Image
                src="/images/men.jpg"
                className="w-full rounded-lg min-h-full"
                width={600}
                height={100}
                alt="Men"
              ></Image>
              <a href="">
                <div className="absolute bottom-8 left-6 bg-black rounded-md w-auto p-4">
                  <span className="text-white flex items-center">
                    Men{" "}
                    <Image
                      src="arrow.svg"
                      width={24}
                      height={24}
                      alt="arrow"
                      className="ms-2"
                    />
                  </span>
                </div>
              </a>
            </div>
            <div className="row-span-2 col-span-4 relative mx-auto">
              <Image
                src="/images/women.jpg"
                className="w-full rounded-lg h-full"
                width={600}
                height={100}
                alt="Men"
              ></Image>
              <a
                href=""
                className="absolute justify-center mx-auto flex items-center inset-0 top-auto bottom-8"
              >
                <div className="   bg-black rounded-md w-auto p-4 ">
                  <span className="text-white flex items-center ">
                    Women{" "}
                    <Image
                      src="arrow.svg"
                      width={24}
                      height={24}
                      alt="arrow"
                      className="ms-2"
                    />
                  </span>
                </div>
              </a>
            </div>
            <div className="row-span-2 col-span-2 relative">
              <Image
                src="/images/baby.jpg"
                className="w-full  h-full"
                width={600}
                height={75}
                alt="Men"
              ></Image>
              <a href="" className="">
                <div className="absolute bottom-8 left-6 bg-black rounded-md w-auto p-4">
                  <span className="text-white flex items-center">
                    <p className="text-base">Baby & Kids</p>{" "}
                    <Image
                      src="arrow.svg"
                      width={24}
                      height={24}
                      alt="arrow"
                      className="ms-2"
                    />
                  </span>
                </div>
              </a>
            </div>
            <div className="row-span-2 col-span-2  relative">
              <Image
                src="/images/sport.jpg"
                className="w-full rounded-lg h-full"
                width={600}
                height={80}
                alt="Men"
              ></Image>
              <a href="">
                <div className="absolute bottom-8 left-6 bg-black rounded-md w-auto p-4">
                  <span className="text-white flex items-center">
                    Sport{" "}
                    <Image
                      src="arrow.svg"
                      width={24}
                      height={24}
                      alt="arrow"
                      className="ms-2"
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
