import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    SayCategory,
    SayRating,
    InputValue,
    ClearAll,
  } = props

  const cat = categoryId => {
    SayCategory(categoryId)
  }

  const Rating = rat => {
    SayRating(rat)
  }

  const input = event => {
    InputValue(event.target.value)
  }

  const Clear = () => {
    ClearAll()
  }

  return (
    <div className="filters-group-container">
      <input type="search" placeholder="Search" onChange={input} />
      <h1 className="h1">Category</h1>
      <ul className="ul">
        {categoryOptions.map(each => (
          <li className="li" key={each.categoryId}>
            <p className="p" onClick={() => cat(each.categoryId)}>
              {each.name}
            </p>
          </li>
        ))}
      </ul>
      <div>
        <h1 className="h1">Rating</h1>
        <ul className="ul">
          {ratingsList.map(each => (
            <li key={each.ratingId}>
              <div className="pa">
                <button
                  type="button"
                  className="p"
                  onClick={() => Rating(each.ratingId)}
                >
                  <img
                    src={each.imageUrl}
                    className="im"
                    alt={`rating ${each.ratingId}`}
                  />
                </button>
                <p>& up</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" className="but" onClick={Clear}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
