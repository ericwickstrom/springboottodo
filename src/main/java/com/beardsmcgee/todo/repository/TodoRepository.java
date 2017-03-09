package com.beardsmcgee.todo.repository;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.beardsmcgee.todo.model.Todo;

@RepositoryRestResource(collectionResourceRel="todo", path="todo")
public interface TodoRepository extends PagingAndSortingRepository<Todo, Long> {
	public List<Todo> findAllByOrderByIdAsc();
}
