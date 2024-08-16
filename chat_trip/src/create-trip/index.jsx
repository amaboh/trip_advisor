import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const CreateTrip = () => {

    const [place, setPlace] = useState('')
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bo;d text-3xl">What are your travel preference</h2>
      <p className="mt-3 text-gray-500 text-xl">
        {" "}
        Just provide us your travel preferences and we would proceeed to make
        great suggestioins for you.
      </p>
      <div>
        <div>
          <h2 className="text-xl my-3 font-medium">What is destination ?</h2>
          <GooglePlacesAutocomplete
          placeHolder="Enter a destination"
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
                place,
                onChange: (v)=>{setPlace(v); console.log(v)}
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTrip;
