/* Smart Search & Doctor Filter Component */

window.PulseCareSearchFilter = {
  filterState: {
    query: '',
    specialty: 'All',
    location: 'All',
    gender: 'All',
    maxFee: 200,
    minRating: 0
  },

  init(doctors) {
    this.allDoctors = doctors || [];
    return this;
  },

  filterDoctors() {
    return this.allDoctors.filter(doc => {
      const matchesQuery = !this.filterState.query || 
        doc.name.toLowerCase().includes(this.filterState.query.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(this.filterState.query.toLowerCase()) ||
        doc.hospital.toLowerCase().includes(this.filterState.query.toLowerCase());

      const matchesSpecialty = this.filterState.specialty === 'All' || doc.specialty === this.filterState.specialty;
      const matchesLocation = this.filterState.location === 'All' || doc.location.includes(this.filterState.location);
      const matchesGender = this.filterState.gender === 'All' || doc.gender === this.filterState.gender;
      const matchesFee = doc.fee <= this.filterState.maxFee;
      const matchesRating = doc.rating >= this.filterState.minRating;

      return matchesQuery && matchesSpecialty && matchesLocation && matchesGender && matchesFee && matchesRating;
    });
  },

  setFilter(key, value) {
    this.filterState[key] = value;
    return this.filterDoctors();
  },

  resetFilters() {
    this.filterState = {
      query: '',
      specialty: 'All',
      location: 'All',
      gender: 'All',
      maxFee: 200,
      minRating: 0
    };
    return this.filterDoctors();
  }
};
