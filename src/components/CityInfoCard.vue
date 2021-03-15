<template>
  <div class="card">
    <div class="summary">
      <h2>0°</h2>
      <h4>Köttkulla, SE</h4>
    </div>
    <div class="weather">
      <h2>Rain</h2>
      <h4>Light rain</h4>
    </div>
    <div class="details">
      <div class="items">
        <div>
          <h4>Feels like</h4>
          <p>0°</p>
        </div>
        <div>
          <h4>Humidity</h4>
          <p>50%</p>
        </div>
        <div>
          <h4>Pressure</h4>
          <p>1000mb</p>
        </div>
        <div>
          <h4>Min temp</h4>
          <p>0°</p>
        </div>
        <div>
          <h4>Max temp</h4>
          <p>10°</p>
        </div>
      </div>
      <button>Back</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityInfoCard"
}
</script>

<style>
  .card {
    display: grid;
    min-width: 400px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
      "sm wt"
      "dt dt";
    background-color: rgba(232, 230, 227, 0.87);
    border-radius: 2em;
    padding: 2em;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 1px;
  }

  h2, h4 {
    margin: 0 auto;
  }

  h4 {
    font-weight: 100;
    font-size: 1em;
  }

  .items {
    display: flex;
    justify-content: space-between;
  }

  .items > div {
    display: flex;
    flex-direction: column;
    margin: auto 0.5em;
  }

  .summary {
    grid-area: sm;
  }

  .weather {
    grid-area: wt;
  }

  .details {
    grid-area: dt;
  }
</style>