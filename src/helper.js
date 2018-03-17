export default class DistrictRepository {
  constructor(stats) {
    this.stats = this.summarizeStats(stats);
  }

  summarizeStats(stats) {
    console.log('stats', stats)
    return stats.reduce((obj, enrollment) => {
      if (!obj[enrollment.Location]){
        obj[enrollment.Location] = { location: '', stats: {}} 
      } 

      obj[enrollment.Location].location = enrollment.Location.toUpperCase();
      obj[enrollment.Location].stats[enrollment.TimeFrame] = this.cleanStats(enrollment.Data)

      return obj;
    }, {});
  }

  cleanStats(stats) {
    if (typeof stats === 'string') {
      stats = 0;
    }

    return parseFloat(stats.toFixed(3))
  }

  findByName(name) {
    if(name) {
      var caseInsensitive = name.toUpperCase();  
    }

    const findDistrict = Object.keys(this.stats).find(district => {
      return district.toUpperCase() === caseInsensitive
    })

    return this.stats[findDistrict]
  }

  findAllMatches(name) {
    let keys = Object.keys(this.stats);

    if (name) {
      return keys.map(key => this.stats[key]).filter(district => district.location.includes(name.toUpperCase()))
    } else {
      return keys.map(key => this.stats[key])
    }
  }

  findAverage(name) {
    const district = this.findByName(name)
    const percentagesList = Object.values(district.stats)
    const sum = percentagesList.reduce((sum, percentage) => sum + percentage, 0)
    return parseFloat((sum / percentagesList.length).toFixed(3))
  }

  compareDistrictAverages(district1name, district2name) {
    const district1average = this.findAverage(district1name);
    const district2average = this.findAverage(district2name);
    const compared = parseFloat((district1average / district2average).toFixed(3))
    return {
      [district1name.toUpperCase()]: district1average,
      [district2name.toUpperCase()]: district2average,
      compared
    }
    
  }
}
