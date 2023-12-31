package models

// FiltersAPIResponse response retruned by filterfile endpoint on meshplay server
type FiltersAPIResponse struct {
	Page       uint            `json:"page"`
	PageSize   uint            `json:"page_size"`
	TotalCount uint            `json:"total_count"`
	Filters    []MeshplayFilter `json:"filters"`
}
