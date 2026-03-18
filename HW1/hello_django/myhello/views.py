#from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
from .models import Course

import json
from .models import Post
 
class HelloApiView (APIView):
    def get(self,request):
        my_name=request.GET.get('name', None)
        if my_name:
            retValue={}
            retValue['data']='hello' + my_name
            return Response(retValue,status=status.HTTP_200_OK)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status =status.HTTP_400_BAD_REQUEST
            )
 
@api_view(['GET'])
def add_post(request):
    title = request.GET.get('title', '')
    content = request.GET.get('content', '')
    photo = request.GET.get('photo', '')
    location = request.GET.get('location', '')

    new_post = Post()
    new_post.title = title
    new_post.content = content
    new_post.photo = photo
    new_post.location = location
    new_post.save()

    if title:
            return Response({"data": title + " insert!"}, status=status.HTTP_200_OK)
    else:
        return Response(
            {"res": "parameter: title is None"},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['GET'])
def list_post(request):
    posts = Post.objects.all().values()
    return JsonResponse(list(posts),safe=False)


# 1. 加入課程的 API (對應 addcourse)
@api_view(['GET'])
def add_course(request):
    dept = request.GET.get('Department', '')
    title = request.GET.get('CourseTitle', '')
    teacher = request.GET.get('Instructor', '')

    if dept and title and teacher:
        Course.objects.create(Department=dept, CourseTitle=title, Instructor=teacher)
        return Response({"res": f"{title} 新增成功！"}, status=status.HTTP_200_OK)
    else:
        return Response({"res": "參數不足"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def list_course(request):
    data = list(Course.objects.all().values())
    return Response(data, status=status.HTTP_200_OK)
    