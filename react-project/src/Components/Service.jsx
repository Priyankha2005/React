import './Bike.css';

const Service = () => {
  return (

<>

<div className="hero">
      <div className="hero-left">
        <h1>
          Book Bike & Two Wheeler <br />
          Service in <span>Tiruppur</span>
        </h1>

        <div className="features">
          <div>⚡ Express Service</div>
          <div>🔧 Expert Technicians</div>
          <div>₹ Economical Pricing</div>
        </div>
      </div>

      <div className="hero-right">
        <h3>Service Center</h3>
        <select>
          <option>Select the nearest service center</option>
          <option>Tiruppur North</option>
          <option>Tiruppur South</option>
        </select>
        <button>Proceed</button>
      </div>
    </div>




   <div className="services-wrapper">
      <h2 className="services-title">
        Professional Services for <span>Every Two-Wheeler</span>
      </h2>

      <div className="services-grid">

        <div className="service-box center">
          <div className="service-text">
            <h3>Express Service (For prior appointments only)</h3>
            <p className="price">Starts at ₹777*</p>
            <span className="time">⏱ 1 hour</span>

            <p className="desc">
              Priority service swiftly executed by expert technicians
            </p>

            <p className="link">See what's included</p>
          </div>

          <div className="service-img">
            <img src="https://ik.imagekit.io/drivex/ik_service_packages/express_service.webp?tr=w-80,f-avif,dpr-2" alt="" />
          </div>
        </div>

      
        <div className="service-box center">
          <div className="service-text">
            <h3>General Periodic Maintenance (Less than 10K kms)</h3>
            <p className="price">Starts at ₹599*</p>
            <span className="time">⏱ 2 hours</span>

            <p className="desc">
              Perfect option for routine maintenance to ensure your motorbike’s
              reliability and safety on the road.
            </p>

            <p className="link">See what's included</p>
          </div>

          <div className="service-img">
            <img src="https://ik.imagekit.io/drivex/ik_service_packages/generic_maintenance.webp?tr=w-80,f-avif,dpr-2" alt="" />
          </div>
        </div>

        <div className="service-box center">
          <div className="service-text">
            <h3>Essential Maintenance (More than 10K kms)</h3>
            <p className="price">Starts at ₹999*</p>
            <span className="time">⏱ 4 hours</span>

            <p className="desc">
              Get ready to experience enhanced power, responsiveness, and
              handling with this package.
            </p>

            <p className="link">See what's included</p>
          </div>

          <div className="service-img">
            <img src="https://ik.imagekit.io/drivex/ik_service_packages/essential_maintenance.webp?tr=w-80,f-avif,dpr-2" alt="" />
          </div>
        </div>

      </div>
    </div>
</>
  );
};
export default Service;
