#include "sort.h"

/**
 *bubble_sort - will sort an array of integers in ascending order
 *@array: pointer to an array
 *@size: size of the array
 *Return: void
 */
void bubble_sort(int *array, size_t size)
{
	size_t i;
	size_t sort;
	int temp;

	for (i = 0; i < size; i++)
	{
		for (sort = 0; sort < size - i - 1; sort++)
		{
			if (array[sort] > array[sort + 1])
			{
				temp = array[sort];
				array[sort] = array[sort + 1];
				array[sort + 1] = temp;
				print_array(array, size);
			}
		}
	}
}