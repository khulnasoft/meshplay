package models

// PatternsAPIResponse response retruned by patternfile endpoint on meshplay server
type PatternsAPIResponse struct {
	Page       uint             `json:"page"`
	PageSize   uint             `json:"page_size"`
	TotalCount uint             `json:"total_count"`
	Patterns   []MeshplayPattern `json:"patterns"`
}
