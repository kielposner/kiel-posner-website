/* eslint-disable react/no-unescaped-entities */
import SimpleSlider from "../components/SimpleSlider";

const Home = () => {
  return (
    <>
      <div className="relative isolate overflow-hidden pt-6 sm:pt-10 lg:overflow-visible">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 p-4">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:p-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mx-auto">
                About Me
              </h1>
            </div>
          </div>
          <div className="md:-mt-12 md:-ml-12 md:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <SimpleSlider />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7 text-slate-700 lg:max-w-xl p-4">
                <p>
                  Kiel(Kyle) Posner is a Ceramacist working in Washinton, DC.
                  Their work is anchored in the historical context of their
                  great-grandfather's labor practices after emigrating to New
                  York City from Kiev in 1912. They reference and use leftover
                  materials from his plastics and ceramics manufacturing
                  business in the porcelain and surface treatments they use for
                  their lamps. Working in this way helps foster a closeness to
                  their personal history through reperforming and queering the
                  same processes their family engaged in. Kiel graduated with a
                  degree in Craft and Material Studies from Virginia
                  Commonwealth University in Richmond, Virginia. They were
                  awarded a Virginia Museum of Fine Arts Fellowship. Kiel was an
                  Artist in Residence at the Torpedo Factory Art Center. They
                  have also worked with Corcoran School of the Arts and have
                  their work in Selina Hotels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
