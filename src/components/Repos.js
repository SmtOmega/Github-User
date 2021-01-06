import { useGlobalContext } from "../context/context";
import { Bar, Column, Pie, Doughnut } from "./Charts";

const Repos = () => {
  const { repos } = useGlobalContext();

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;
    if (!total[language]) {
      total[language] = { label: language, value: 1, stars: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      };
    }
    return total;
  }, {});
  const mostLanguage = Object.values(languages).sort((a, b) => {
    return b.value - a.value;
  });
  const mostStars = Object.values(languages)
    .sort((a, b) => {
      return b.stars - a.stars;
    })
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  let { stars, forked } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forked[forks] = {label: name, value: forks}
      return total;
    },
    { stars: {}, forked: {} }
  );

  stars = Object.values(stars).slice(-5).reverse();
  forked = Object.values(forked).slice(-5).reverse()
  
  return (
    <section>
      <div className="chart-container">
        <Pie data={mostLanguage} />
        <Column data={stars} />
        <Doughnut data={mostStars} />
        <Bar data={forked}/>
      </div>
    </section>
  );
};

export default Repos;
